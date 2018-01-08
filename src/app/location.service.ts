import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
  locations: string[] = ['Abengourou', 'Abidjan', 'Aboisso', 'Abongoua', 'Adaou', 'Adiaké', 'Adjouan', 'Adzopé',
  'Agboville', 'Agnibilékrou', 'Akoupé', 'Alépé', 'Ananda', 'Annépé', 'Anyama', 'Appimadoum', 'Attinguié',
  'Bacanda', 'Badikaha', 'Bako', 'Bangolo', 'Bécouéfin', 'Bédi-Goazon', 'Béoumi', 'Bettié', 'Biankouma', 'Biéby',
  'Bingerville', 'Bin-Houyé', 'Blapleu', 'Bléniméouin', 'Blességué', 'Bloléquin', 'Boahia', 'Bocanda', 'Bogouiné',
  'Bondoukou', 'Bongouanou', 'Bonoua', 'Bouaflé', 'Bouaké', 'Bouandougou', 'Bouna', 'Boundiali', 'Brofodoumé',
  'Dabakala', 'Dabou', 'Dabouyo', 'Daloa', 'Danané', 'Daoukro', 'Diamarakro', 'Dianra', 'Diawalla', 'Diboké',
  'Didiévi', 'Dignago', 'Dimbokro', 'Divo', 'Doké', 'Doudoukou', 'Duékoué', 'Fadiadougou', 'Famienkro',
  'Ferkessédougou', 'Gagnoa', 'Gbangbégouiné', 'Gbangbégouiné-Yati', 'Gohouo-Zagna', 'Gomon', 'Gouiné',
  'Grand-Bassam', 'Grand-Lahou', 'Guessabo', 'Guibéroua', 'Guéyo', 'Guinglo-Tahouaké', 'Guitry', 'Hiré', 'Issia', 'Jacqueville',
  'Kahin-Zarabaon', 'Kani', 'Kanzra', 'Katiola', 'Kong', 'Korhogo', 'Koro', 'Kouakro', 'Kounahiri',
  'Koun-Fao', 'Kouto', 'Koutouba', 'Kpata', 'Lakota', 'Lolobo', 'Loviguié', 'Mamini', 'Man', 'Mankono',
  'Mantongouiné', 'Marahoué', 'M\'Bahiakro', 'M\'batto', 'Morondo', 'Nafana (Prikro)', 'N\'douci', 'N\'Gokro', 'Niakaramandougou',
  'Niambézaria', 'Niellé', 'Nofou', 'Odienné', 'Oumé', 'Ouyably-Gnondrou', 'Pacobo', 'Péhé', 'Sakassou',
  'Samatiguila', 'Sandougou-Soba', 'San-Pédro', 'Sassandra', 'Séguéla', 'Sinfra', 'Soubré', 'Tabou', 'Tafiré',
  'Taï', 'Tanda', 'Tiagba', 'Tiapoum', 'Tiassalé', 'Tiébissou', 'Tiédio', 'Tiéningboué', 'Tingréla', 'Tinhou', 'Tiobli',
  'Togoniéré', 'Touba', 'Tougbo', 'Toulepleu', 'Toumodi', 'Toumoukoro', 'Vavoua', 'Varalé', 'Yakassé-Mé',
  'Yamoussoukro', 'Yaou', 'Yorodougou', 'Zonneu', 'Zouan-Hounien'];
  constructor() { }

}
