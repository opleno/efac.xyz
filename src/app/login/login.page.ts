import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { 
    // importar 
  }

  ngOnInit() {
  }
  click(){
    console.log("acabamos de darle al click");
    this.router.navigate(['tabs']);
  }
}
