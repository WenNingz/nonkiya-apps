import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { GridViewComponent } from './grid-view/grid-view';
import { ListViewComponent } from './list-view/list-view';
@NgModule({
	declarations: [HeaderComponent,
    GridViewComponent,
    ListViewComponent],
	imports: [],
	exports: [HeaderComponent,
    GridViewComponent,
    ListViewComponent]
})
export class ComponentsModule {}
