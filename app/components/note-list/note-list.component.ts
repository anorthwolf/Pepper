/**
 * Created by yxzhang on 9/26/16.
 */
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../business/note.service';
import { LocalNoteService } from '../../business/local-note.service';

import { Router } from '@angular/router';
import dialogs = require('ui/dialogs');

@Component({
    selector: 'note-list',
    templateUrl: './components/note-list/note-list.component.html',
    providers: [ NoteService, LocalNoteService ],
    styleUrls: ['./components/note-list/note-list.component.css']
})
export class NoteListComponent implements OnInit {
    private notes: Array<Object>;

    constructor(private noteService: NoteService, private localNoteService: LocalNoteService, private router: Router) {
        this.notes = [];
    }

    ngOnInit() {
        this.noteService.getNotes()
            .subscribe(
                (response) => this.processNote(response),
                (e) => {
                    alert('Get notes failure: ' + e);
                }
            );
    }  

    onItemTap(event) {
        var options = {
            title: this.notes[event.index]['title'].toString(),
            message: this.notes[event.index]['id'].toString(),
            cancelButtonText: 'Cancel',
            actions: ['Download', 'Detail', 'Edit', 'Delete', 'Add Sidenote']
        };
        dialogs.action(options).then((result) => this.noteAction(result, event.index));
    }

    public processNote(response) {
        var noteList = response.json()['thread-list'];
        var notes:Array<Object> = [];
        for(let note of noteList) {
            var tmpNote: Object = {};
            let noteData = note.notes[0]['data'];
            tmpNote['id'] = noteData['id'];
            tmpNote['title'] = noteData['title'];
            tmpNote['entryType'] = noteData['entry-type'].link.phid;
            tmpNote['priority'] = noteData['priority'];
            tmpNote['sentiment'] = noteData['sentiment'];
            tmpNote['submitter'] = noteData['submitter'].link.phid;
            tmpNote['displayDate'] = new Date(noteData['display-date']);
            notes.push(tmpNote);
        }
        this.notes = notes;
        console.log(this.notes);
    }

    public noteAction(result, index) {
        if(result === 'Download') {
            let note = this.notes[index];
            let noteId = note['id'];
            let noteStr = JSON.stringify(note);
            this.localNoteService.saveNoteLocally(noteId, noteStr);
        } if (result === 'Detail') {
            let note = this.notes[index];
            let noteId = note['id'];
            this.router.navigate(['/note-detail', noteId]);
        } else if (result !== 'Cancel'){
            alert(result);
        }
    }
}