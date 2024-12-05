import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plateform',
  templateUrl: './plateform.component.html',
  styleUrls: ['./plateform.component.css']
})
export class PlateformComponent implements OnInit {
  criteriaForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.criteriaForm = this.fb.group({
      age: ['', Validators.required], // Radio buttons for age
      signeClinique: [false], // Checkbox for clinical signs
      fdrC: [false], // Checkbox for FDRC
      migraine: [false], // Checkbox for migraine
      nerfOptique: [false], // Checkbox for Nerf optique
      medullaire: [false], // Checkbox for medullaire
      cortical: [false], // Checkbox for cortical
      sousCortical: [false], // Checkbox for sous cortical
      periventiculaire: [false], // Checkbox for periventiculaire
      signeVeineCentrale: [false], // Checkbox for veine centrale
      boc: [false], // Checkbox for BOC
      indexKappa: [false], // Checkbox for Index Kappa
      disseminationTemporelle: [false], // Checkbox for dissemination temporelle
      prl: [false] // Checkbox for PRL
    });
  }

  onSubmit() {
    // Récupérer les valeurs du formulaire
    const formValues = this.criteriaForm.value;

    // Logique pour déterminer la maladie en fonction des choix
    if (formValues.age === '<50' && formValues.signeClinique && formValues.nerfOptique && formValues.prl) {
      this.message = "J'ai la maladie X";
    } else {
      this.message = "Aucune maladie identifiée.";
    }
  }
}
