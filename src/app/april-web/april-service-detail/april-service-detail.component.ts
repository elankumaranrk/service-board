import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'april-service-detail',
    templateUrl: './april-service-detail.component.html'
})

export class ServiceDetailComponent implements OnInit {
    id: String;
    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.id = params['id'])
    }
}