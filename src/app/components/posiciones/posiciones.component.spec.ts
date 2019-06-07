import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from "@angular/router"
import { PosicionesComponent } from './posiciones.component';
import { Posicion } from 'src/app/models/posicion';
import { HttpClientModule } from '@angular/common/http';

import { compileBaseDefFromMetadata } from '@angular/compiler';

describe('PosicionesComponent', () => {
  let component: PosicionesComponent;
  let fixture: ComponentFixture<PosicionesComponent>;
  let router: Router;

  const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'posiciones/:pais', component: PosicionesComponent }
  ];

  let posicionesEquiposBRA:Posicion[] = [
    { "nombre": "Palmeiras", "pj": "38", "pg": "23", "pe": "11", "pp": "4", "dg": "38", "pts": "80", "cod": "pal" },
    { "nombre": "Flamengo", "pj": "38", "pg": "21", "pe": "9", "pp": "8", "dg": "30", "pts": "72", "cod": "fla"  },
    { "nombre": "Internacional", "pj": "38", "pg": "19", "pe": "12", "pp": "7", "dg": "22", "pts": "69", "cod": "int"  },
    { "nombre": "Gremio", "pj": "38", "pg": "18", "pe": "12", "pp": "8", "dg": "21", "pts": "66", "cod": "gre"  },
    { "nombre": "Sao Paulo", "pj": "38", "pg": "16", "pe": "15", "pp": "7", "dg": "12", "pts": "63", "cod": "sao"  },
    { "nombre": "Atletico Mineiro", "pj": "38", "pg": "17", "pe": "8", "pp": "13", "dg": "13", "pts": "59", "cod": "atm"  },
    { "nombre": "Athletico Paranaense", "pj": "38", "pg": "16", "pe": "9", "pp": "13", "dg": "17", "pts": "57", "cod": "atp"  },
    { "nombre": "Cruzeiro", "pj": "38", "pg": "14", "pe": "11", "pp": "13", "dg": "0", "pts": "53", "cod": "cru"  },
    { "nombre": "Botafogo", "pj": "38", "pg": "13", "pe": "12", "pp": "13", "dg": "-8", "pts": "51", "cod": "bot"  },
    { "nombre": "Santos", "pj": "38", "pg": "13", "pe": "11", "pp": "14", "dg": "6", "pts": "50", "cod": "san"  },
    { "nombre": "Bahia", "pj": "38", "pg": "12", "pe": "12", "pp": "14", "dg": "-2", "pts": "48", "cod": "bah"  },
    { "nombre": "Fluminense", "pj": "38", "pg": "12", "pe": "9", "pp": "17", "dg": "-14", "pts": "45", "cod": "flu"  },
    { "nombre": "Corinthians", "pj": "38", "pg": "11", "pe": "11", "pp": "16", "dg": "-1", "pts": "44", "cod": "cor"  },
    { "nombre": "Chapecoense", "pj": "38", "pg": "11", "pe": "11", "pp": "16", "dg": "-16", "pts": "44", "cod": "cha"  },
    { "nombre": "Ceara", "pj": "38", "pg": "10", "pe": "14", "pp": "14", "dg": "-6", "pts": "44", "cod": "cea"  },
    { "nombre": "Vasco da Gama", "pj": "38", "pg": "10", "pe": "13", "pp": "15", "dg": "-7", "pts": "43", "cod": "vga"  },
    { "nombre": "Sport Recife", "pj": "38", "pg": "11", "pe": "9", "pp": "18", "dg": "-22", "pts": "42", "cod": "sre"  },
    { "nombre": "America-MG", "pj": "38", "pg": "10", "pe": "10", "pp": "18", "dg": "-17", "pts": "40", "cod": "ame"  },
    { "nombre": "Vitoria", "pj": "38", "pg": "9", "pe": "10", "pp": "19", "dg": "-27", "pts": "37", "cod": "vit"  },
    { "nombre": "Parana", "pj": "38", "pg": "4", "pe": "11", "pp": "23", "dg": "-39", "pts": "23", "cod": "par"  }
  ]

  let posicionesEquiposCOL:Posicion[] = [
    { "nombre": "Millonarios", "pj": "19", "pg": "11", "pe": "5", "pp": "3", "dg": "15", "pts": "38", "cod": ""  },
    { "nombre": "Tolima", "pj": "19", "pg": "9", "pe": "5", "pp": "5", "dg": "12", "pts": "32", "cod": ""  },
    { "nombre": "America", "pj": "19", "pg": "9", "pe": "4", "pp": "6", "dg": "6", "pts": "31", "cod": ""  },
    { "nombre": "Junior", "pj": "19", "pg": "6", "pe": "12", "pp": "1", "dg": "7", "pts": "30", "cod": ""  },
    { "nombre": "Pasto", "pj": "19", "pg": "8", "pe": "6", "pp": "5", "dg": "5", "pts": "30", "cod": ""  },
    { "nombre": "Deportivo Cali", "pj": "19", "pg": "8", "pe": "6", "pp": "5", "dg": "4", "pts": "30", "cod": ""  },
    { "nombre": "Once Caldas", "pj": "19", "pg": "8", "pe": "4", "pp": "7", "dg": "5", "pts": "28", "cod": ""  },
    { "nombre": "Atletico Nacional", "pj": "19", "pg": "7", "pe": "7", "pp": "5", "dg": "4", "pts": "28", "cod": ""  },
    { "nombre": "Union Magdalena", "pj": "19", "pg": "7", "pe": "6", "pp": "6", "dg": "-1", "pts": "27", "cod": ""  },
    { "nombre": "Patriotas", "pj": "19", "pg": "7", "pe": "6", "pp": "6", "dg": "-8", "pts": "27", "cod": ""  },
    { "nombre": "Medellin", "pj": "19", "pg": "6", "pe": "7", "pp": "6", "dg": "5", "pts": "25", "cod": ""  },
    { "nombre": "Envigado", "pj": "19", "pg": "5", "pe": "9", "pp": "5", "dg": "3", "pts": "24", "cod": ""  },
    { "nombre": "Cucuta", "pj": "19", "pg": "7", "pe": "3", "pp": "9", "dg": "-3", "pts": "24", "cod": ""  },
    { "nombre": "Bucaramanga", "pj": "19", "pg": "5", "pe": "6", "pp": "8", "dg": "-7", "pts": "21", "cod": ""  },
    { "nombre": "Alianza Petrolera", "pj": "19", "pg": "4", "pe": "8", "pp": "7", "dg": "-5", "pts": "20", "cod": ""  },
    { "nombre": "Jaguares", "pj": "19", "pg": "4", "pe": "8", "pp": "7", "dg": "-9", "pts": "20", "cod": ""  },
    { "nombre": "La Equidad", "pj": "19", "pg": "3", "pe": "10", "pp": "6", "dg": "-3", "pts": "19", "cod": ""  },
    { "nombre": "Atletico Hulia", "pj": "19", "pg": "4", "pe": "7", "pp": "8", "dg": "-11", "pts": "19", "cod": ""  },
    { "nombre": "Aguilas doradas", "pj": "19", "pg": "3", "pe": "6", "pp": "10", "dg": "-13", "pts": "15", "cod": ""  },
    { "nombre": "Santa Fe", "pj": "19", "pg": "1", "pe": "11", "pp": "7", "dg": "-6", "pts": "14", "cod": ""  }
  ]

  let posicionesEquiposARG:Posicion[] = [
    { "nombre": "Racing Club", "pj": "25", "pg": "17", "pe": "6", "pp": "2", "dg": "", "pts": "57", "cod": "rac" },
    { "nombre": "Defensa y Justicia", "pj": "25", "pg": "15", "pe": "8", "pp": "2", "dg": "", "pts": "53", "cod": "dyj" },
    { "nombre": "Boca Juniors", "pj": "25", "pg": "15", "pe": "6", "pp": "4", "dg": "", "pts": "51", "cod": "boc" },
    { "nombre": "River Plate", "pj": "25", "pg": "13", "pe": "6", "pp": "6", "dg": "", "pts": "45", "cod": "riv" },
    { "nombre": "Atletico Tucuman", "pj": "25", "pg": "12", "pe": "6", "pp": "7", "dg": "", "pts": "42", "cod": "atu" },
    { "nombre": "Velez Sarfield", "pj": "25", "pg": "11", "pe": "7", "pp": "7", "dg": "", "pts": "40", "cod": "vel" },
    { "nombre": "Independiente", "pj": "25", "pg": "10", "pe": "8", "pp": "7", "dg": "", "pts": "38", "cod": "ind" },
    { "nombre": "Union Santa Fe", "pj": "25", "pg": "9", "pe": "9", "pp": "7", "dg": "", "pts": "36", "cod": "usf" },
    { "nombre": "Tigre", "pj": "25", "pg": "9", "pe": "9", "pp": "7", "dg": "", "pts": "36", "cod": "tig" },
    { "nombre": "Huracan", "pj": "25", "pg": "9", "pe": "8", "pp": "8", "dg": "", "pts": "35", "cod": "huc" },
    { "nombre": "Lanus", "pj": "25", "pg": "9", "pe": "7", "pp": "9", "dg": "", "pts": "34", "cod": "lan" },
    { "nombre": "Talleres", "pj": "25", "pg": "9", "pe": "6", "pp": "10", "dg": "", "pts": "33", "cod": "tal" },
    { "nombre": "Aldosivi", "pj": "25", "pg": "9", "pe": "6", "pp": "10", "dg": "", "pts": "33", "cod": "ald" },
    { "nombre": "Godoy Cruz", "pj": "25", "pg": "9", "pe": "5", "pp": "11", "dg": "", "pts": "32", "cod": "god" },
    { "nombre": "Newell's Old Boys", "pj": "25", "pg": "7", "pe": "8", "pp": "10", "dg": "", "pts": "29", "cod": "new" },
    { "nombre": "Banfield", "pj": "25", "pg": "6", "pe": "11", "pp": "8", "dg": "", "pts": "29", "cod": "ban" },
    { "nombre": "Estudiantes", "pj": "25", "pg": "7", "pe": "8", "pp": "10", "dg": "", "pts": "29", "cod": "est" },
    { "nombre": "Gimnasia La Plata", "pj": "25", "pg": "8", "pe": "5", "pp": "12", "dg": "", "pts": "29", "cod": "gim" },
    { "nombre": "Patronato", "pj": "25", "pg": "7", "pe": "5", "pp": "13", "dg": "", "pts": "26", "cod": "pat" },
    { "nombre": "Rosario Central", "pj": "25", "pg": "6", "pe": "8", "pp": "11", "dg": "", "pts": "26", "cod": "ros" },
    { "nombre": "San Martin de San Juan", "pj": "25", "pg": "6", "pe": "7", "pp": "12", "dg": "", "pts": "25", "cod": "ssj" },
    { "nombre": "Belgrano", "pj": "25", "pg": "4", "pe": "12", "pp": "9", "dg": "", "pts": "24", "cod": "bel" },
    { "nombre": "San Lorenzo de Almagro", "pj": "25", "pg": "3", "pe": "14", "pp": "8", "dg": "", "pts": "23", "cod": "sla" },
    { "nombre": "Colon de Santa Fe", "pj": "25", "pg": "4", "pe": "11", "pp": "10", "dg": "", "pts": "23", "cod": "csf" },
    { "nombre": "San Martin de Tucuman", "pj": "25", "pg": "4", "pe": "11", "pp": "10", "dg": "", "pts": "23", "cod": "smt" },
    { "nombre": "Argentinos Juniors", "pj": "25", "pg": "5", "pe": "7", "pp": "13", "dg": "", "pts": "22", "cod": "arj" }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ 
                HttpClientModule, 
                RouterTestingModule.withRoutes(routes) 
              ],
      declarations: [ PosicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(PosicionesComponent);
    router.initialNavigation();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    router.navigate(['']);
    expect(component).toBeTruthy();
  });

  it('should have a Posiciones as title', ()=>{
    expect(component.title).toEqual("Posiciones")
  })

  it('should have title in h3', ()=>{
    let h3Tag:HTMLElement = fixture.nativeElement.querySelector("h1");
    expect(h3Tag.textContent).toEqual(" Posiciones ")
  })

  it('should load the argentina positions', ()=>{
    component
      .cargarPosiciones('ARG')
      .subscribe((posiciones)=>{
          expect(posiciones).toEqual(posicionesEquiposARG)
        })
  })

  it('should load the brasileirao positions', ()=>{
    component
      .cargarPosiciones('BRA')
      .subscribe((posiciones)=>{
          expect(posiciones).toEqual(posicionesEquiposBRA)
        })
  })

  it('should load the colombian positions', ()=>{
    component
      .cargarPosiciones('COL')
      .subscribe((posiciones)=>{
          expect(posiciones).toEqual(posicionesEquiposCOL)
        })
  })

  it('should load the argentina positions at the begining', async(()=>{
    fixture.whenStable().then(()=>{
      expect(component.equipos).toEqual(posicionesEquiposARG);
    })
  }));
});
