import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor (private router: Router, private route: ActivatedRoute) {}

  to (path: string, relative: boolean = true) {
    console.log(this.router.url)
    if (relative === true) {
      this.router.navigate([`/${path}`], { relativeTo: this.route })
    } else {
      this.router.navigate([`/${path}`])
    }
  }

  back (relative: boolean = true) {
    if (relative === false) {
      this.router.navigate(['..'])
    } else {
      this.router.navigate([''])
    }
  }

  getParam (param: any) {
    return this.route.snapshot.paramMap.get(`${param}`)
  }
}
