/* eslint-disable-next-line */
import cn from 'classnames';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from "next/image";
import {BLOCKS} from "@contentful/rich-text-types";

export interface ContentRichTextProps {
  richContent: any;
  align: 'left' | 'center' | 'right';
  containerWidth: 'full' | 'w-1/2';
}

function renderOptions(links: any | undefined) {

  if(!links) {
    return
  }

  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  // eslint-disable-next-line no-unsafe-optional-chaining
  for (const asset of links?.assets?.block) {
    assetMap.set(asset.sys.id, asset);
  }
  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  // eslint-disable-next-line no-unsafe-optional-chaining
  for (const entry of links?.entries?.block) {
    entryMap.set(entry.sys.id, entry);
  }


  // eslint-disable-next-line no-unsafe-optional-chaining
  for (const entry of links?.entries?.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    // other options...
    renderNode: {
      // other options...
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <Image src={asset.url} alt="My image alt text" width={asset.width} height={asset.height} quality={60}
                 className="w-full"/>
        );
      },
    },
  };
}


export function ContentRichText({richContent, containerWidth, align}: ContentRichTextProps) {
  return (<div className={cn(
    'container w-full flex',
      align === 'center' && 'justify-center',
      align === 'left' && 'justify-start',
      align === 'right' && 'justify-end',
      )}>
        <div className={cn(
          'flex',

          containerWidth === 'full' && 'w-full',
          containerWidth === 'w-1/2' && 'w-1/2',
        )}>
          <div className={'prose lg:prose-lg w-full'} >
            {documentToReactComponents(richContent?.json, renderOptions(richContent?.links))}
          </div>
        </div>
    </div>
  );
}

export default ContentRichText;
