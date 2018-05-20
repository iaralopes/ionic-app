import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ListafilmedetalhePage } from '../listafilmedetalhe/listafilmedetalhe';

/**
 * Generated class for the ListafilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listafilme',
  templateUrl: 'listafilme.html',
})
export class ListafilmePage {

  filmes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getFilmes();
  }

  getFilmes() {
    this.restProvider.getFilmes()
    .then(data => {
      this.filmes = data;
    });
  }


  getFilme(id, titulo, sinopse) {
    this.navCtrl.push(ListafilmedetalhePage, {
      id: id,
      titulo: titulo,
      sinopse: sinopse
    });
  }
  

  deleteFilme(id) {
    this.restProvider.deleteFilme(id)
    .then(data => {
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListafilmePage');
  }

}
