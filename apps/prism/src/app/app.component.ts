import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxTiptapModule } from 'ngx-tiptap';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { NxWelcomeComponent } from "./nx-welcome.component";
import { ProseComponent } from "./prose/prose.component";

@Component({
  standalone: true,
  imports: [RouterModule, NgxTiptapModule, FormsModule, NxWelcomeComponent, ProseComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'prism';

  editor = new Editor({
    extensions: [StarterKit],
  });

  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
