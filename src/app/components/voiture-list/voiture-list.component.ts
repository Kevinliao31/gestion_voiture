import { Component, OnInit } from '@angular/core';
import { Voiture } from '../../models/voiture';
import { VoitureService } from '../../services/voiture.service';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-voiture-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.scss']
})
export class VoitureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'marque', 'modele', 'actions'];
  voitures: Voiture[] = [];
  voitureForm: Voiture = { marque: '', modele: '', couleur: '', imageUrl: '' };
  isEditing: boolean = false;
  showForm: boolean = false;

  constructor(
    private voitureService: VoitureService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadVoitures();
    console.log('isAdmin:', this.authService.isAdmin());
  }
  

  loadVoitures(): void {
    this.voitureService.getVoitures().subscribe(
      (data) => this.voitures = data,
      (error) => console.error('Erreur lors du chargement des voitures', error)
    );
  }

  showAddForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  editVoiture(voiture: Voiture): void {
    this.voitureForm = { ...voiture };
    this.isEditing = true;
    this.showForm = true;
  }

  saveVoiture(): void {
    if (this.isEditing && this.voitureForm.id) {
      this.voitureService.updateVoiture(this.voitureForm.id, this.voitureForm).subscribe(
        () => {
          this.loadVoitures();
          this.resetForm();
        },
        (error) => console.error('Erreur lors de la mise à jour', error)
      );
    } else {
      this.voitureService.createVoiture(this.voitureForm).subscribe(
        () => {
          this.loadVoitures();
          this.resetForm();
        },
        (error) => console.error('Erreur lors de la création', error)
      );
    }
  }

  deleteVoiture(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) {
      this.voitureService.deleteVoiture(id).subscribe(
        () => this.loadVoitures(),
        (error) => console.error('Erreur lors de la suppression', error)
      );
    }
  }

  resetForm(): void {
    this.voitureForm = { marque: '', modele: '', couleur: '', imageUrl: '' };
    this.isEditing = false;
    this.showForm = false;
  }
}