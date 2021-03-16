import {DateRendererComponent} from './date-renderer/date-renderer.component';
import {ImageRendererComponent} from './image-renderer/image-renderer.component';
import {SelectHeaderRendererComponent} from './select-header-renderer/select-header-renderer.component';
import {SelectRendererComponent} from './select-renderer/select-renderer.component';

export const RENDERER_COMPONENTS = [
  DateRendererComponent,
  ImageRendererComponent,
  SelectRendererComponent,
  SelectHeaderRendererComponent
];

export const COMPONENTS = [
  ...RENDERER_COMPONENTS
];

export {
  DateRendererComponent,
  ImageRendererComponent,
  SelectRendererComponent,
  SelectHeaderRendererComponent
};
