import { CommonModule } from '@angular/common';
import { Component, OnInit, viewChild } from '@angular/core';
import { EditorView } from 'prosemirror-view';
import {undo, redo, history} from "prosemirror-history"

import { baseKeymap } from 'prosemirror-commands';
import { keymap } from 'prosemirror-keymap';
import { schema } from "prosemirror-schema-basic";
import { EditorState, Transaction } from 'prosemirror-state';

@Component({
  selector: 'app-prose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prose.component.html',
  styleUrl: './prose.component.css',
})
export class ProseComponent implements OnInit {

  private prosemirrorContainer = viewChild<HTMLDivElement>('prosemirrorContainer');

  private view!: EditorView;

  ngOnInit() {
    this.initProseMirror();
  }

  private initProseMirror() {
    this.view = new EditorView(this.prosemirrorContainer, {
      state: EditorState.create({
        schema,
        plugins: [
          history(),
          keymap({ ...baseKeymap, "Mod-z": undo, "Mod-y": redo})
        ]
      }),
      dispatchTransaction: (transaction: Transaction) => {
        const newState = this.view.state.apply(transaction);
        this.view.updateState(newState);
      }
    });
  }

}
