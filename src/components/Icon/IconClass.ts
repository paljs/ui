const eva = require('eva-icons');

interface OriginalEvaIcon {
  toSvg(options: EvaIconOptions): string;
}

interface Icons {
  [key: string]: Icon;
}

type Icon = (options?: EvaIconOptions) => string;

export interface EvaIconOptions {
  width?: string;
  height?: string;
  fill?: string;
  class?: string;
  animation?: {
    type?: 'zoom' | 'pulse' | 'shake' | 'flip';
    hover?: boolean;
    infinite?: boolean;
  };
}

function NbEvaSvgIcon(content: OriginalEvaIcon): Icon {
  return function(options?: EvaIconOptions): string {
    return content.toSvg({
      width: '100%',
      height: '100%',
      fill: 'currentColor',
      ...options,
    });
  };
}

export const createIcons: Icons = Object.entries<OriginalEvaIcon>(eva.icons)
  .map(([name, icon]) => {
    return [name, NbEvaSvgIcon(icon)] as [string, Icon];
  })
  .reduce((newIcons, [name, icon]: [string, Icon]) => {
    newIcons[name] = icon;
    return newIcons;
  }, {} as Icons);
