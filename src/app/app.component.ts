import { Component, OnInit } from '@angular/core';
import { Playbook } from '../../types/pbta/playbook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'sheet-smith';

  testPb: Playbook = {
    pbName: 'Sunt nisi ea',
    pbDesc: 'Ullamco occaecat tempor fugiat mollit veniam duis amet commodo pariatur nisi in ullamco.',
    pbStats: [
      [{
        name: 'Nisi',
        modifier: 1
      }, {
        name: 'Ad aliquip',
        modifier: 1
      }, {
        name: 'Aute sit',
        modifier: 0
      }, {
        name: 'Ullamco',
        modifier: -1
      }]
    ],
    pbFirstNameOpts: [
      'Reprehenderit',
      'Ad non',
      'Pariatur',
      'Culpa sunt'
    ],
    pbLookOpts: [{
      lookPresentation: [
        'Dolor ex',
        'Adipisicing',
        'Aliqua exercitation',
        'Nostrud'
      ],
      lookClothes: [
        'Dolor ex',
        'Adipisicing',
        'Aliqua exercitation',
        'Nostrud'
      ],
      lookFace: [
        'Dolor ex',
        'Adipisicing',
        'Aliqua exercitation',
        'Nostrud'
      ],
      lookEyes: [
        'Dolor ex',
        'Adipisicing',
        'Aliqua exercitation',
        'Nostrud'
      ],
      lookBody: [
        'Dolor ex',
        'Adipisicing',
        'Aliqua exercitation',
        'Nostrud'
      ],
    }],
    pbMoves: Move[],
    pbSpecial: Move,
    pbRules: Move[],
    pbGear: Gear[],
    pbBarter: any,
    pbHx: HxOpt[],
    pbImprovement: Improvement,
  }

  ngOnInit(): void { }
}

