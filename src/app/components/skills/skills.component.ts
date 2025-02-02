import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', image: 'html.png' },
    { name: 'CSS', image: 'css.png' },
    { name: 'JavaScript', image: 'javascript.png' },
    { name: 'SQL', image: 'sql.png' },
    { name: 'AWS', image: 'aws-removebg-preview.png' },
    { name: 'Java', image: 'java.png' },
    { name: 'Linux', image: 'linux.png' },
    { name: 'Python', image: 'python.png' }
  ];
}
