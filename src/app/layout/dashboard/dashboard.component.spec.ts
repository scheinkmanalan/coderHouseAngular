import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DashComponent } from './dashboard.component';
import { Component } from '@angular/core';

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'courses', component: DummyComponent },
          { path: 'students', component: DummyComponent },
          { path: 'lessons', component: DummyComponent }
        ])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia navegar a courses cuando se clickea cursos', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const cursosMenuItem = fixture.debugElement.query(By.css('.menu-item span')).nativeElement;
    cursosMenuItem.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/courses']);
  });

  it('Deberia navegar a students cuando se clickea Estudiantes', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const estudiantesMenuItem = fixture.debugElement.queryAll(By.css('.menu-item span'))[1].nativeElement;
    estudiantesMenuItem.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/students']);
  });

  it('deberia navegar a lessons cuando se clickea en Clases', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const clasesMenuItem = fixture.debugElement.queryAll(By.css('.menu-item span'))[2].nativeElement;
    clasesMenuItem.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/lessons']);
  });
});

@Component({ template: '' })
class DummyComponent {}
