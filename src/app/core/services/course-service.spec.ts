import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course-mockup.service';
import { Course } from './course-mockup.service';

describe('CourseService', () => {
  let service: CourseService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });

  it('deberia estar creado', () => {
    expect(service).toBeTruthy();
  });

  it('deberia obtener todos los cursos', () => {
    const mockCourses = [
      { id: 1, name: 'Course 1', description: 'Description 1', date: new Date() },
      { id: 2, name: 'Course 2', description: 'Description 2', date: new Date() }
    ];

    service.getAll().subscribe(courses => {
      expect(courses).toEqual(mockCourses);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toEqual('GET');

    req.flush(mockCourses);
  });

  it('deberia agregar un nuevo curso', () => {
    const newCourse: Course = { id: 3, name: 'New Course', description: 'New Description', date: new Date() };

    service.add(newCourse).subscribe(course => {
      expect(course).toEqual(newCourse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newCourse);

    req.flush(newCourse);
  });

  it('deberia modificar un curso', () => {
    const updatedCourse: Course = { id: 1, name: 'Updated Course', description: 'Updated Description', date: new Date() };

    service.update(updatedCourse).subscribe(course => {
      expect(course).toEqual(updatedCourse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses/1');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatedCourse);

    req.flush(updatedCourse);
  });

  it('deberia borrar un curso', () => {
    const courseId = 1;

    service.delete(courseId).subscribe(() => {
      expect().nothing(); // No se espera un cuerpo de respuesta.
    });

    const req = httpTestingController.expectOne('http://localhost:3000/courses/1');
    expect(req.request.method).toEqual('DELETE');

    req.flush(null); // No hay cuerpo de respuesta para una solicitud de eliminación.
  });
});
