import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importe o Router
import { MinisterioService } from '../services/ministerio.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ministerio',
  templateUrl: './ministerio.component.html',
  styleUrls: ['./ministerio.component.css']
})
export class MinisterioComponent implements OnInit {
  nomeMinisterio: string = '';
  funcaoMinisterio: string = '';
  videoId: string = '';
  ministerioId: string | null = null;

  constructor(private route: ActivatedRoute, private ministerioService: MinisterioService, private sanitizer: DomSanitizer, private router: Router) { } // Injete o Router

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ministerioId = params.get('ministerioId');
      if (this.ministerioId) {
        const ministerio = this.ministerioService.getMinisterioById(this.ministerioId);
        if (ministerio) {
          this.nomeMinisterio = ministerio.nome;
          this.funcaoMinisterio = ministerio.funcao;
          this.videoId = ministerio.videoId;
        }
      }
    });
  }

  getVideoUrl(): SafeResourceUrl {
    const videoId = 'Jsi3tfMlAFY'; // O ID do vídeo do YouTube
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


voltarParaHome(): void {
  this.router.navigate(['/home']); // Navega para a rota '/home'
}

}
