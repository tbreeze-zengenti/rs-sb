import { RouteComponentProps } from '@zengenti/contensis-react-base';

import { ComposerProps } from '~/components/composer/composer.types';

export interface MappedContentPage {
  title: string;
  contentComposerProps: ComposerProps;
}

export type PageProps = RouteComponentProps<MappedContentPage>;
