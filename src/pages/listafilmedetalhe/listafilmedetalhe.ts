import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ListafilmedetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listafilmedetalhe',
  templateUrl: 'listafilmedetalhe.html',
})
export class ListafilmedetalhePage {

  filme = { id: '', titulo: '', sinopse: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.filme.id = navParams.get("id");
    this.filme.titulo = navParams.get("titulo");
    this.filme.sinopse = navParams.get("sinopse");
  }

  deleteFilme(id) {
    this.restProvider.deleteFilme(id)
    .then(data => {
      console.log(data);
      this.navCtrl.pop();
    });
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListafilmedetalhePage');
  }

}
