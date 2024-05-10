'use client';
import React from 'react';

import SocialIcons from './social-icons';
import { ButtonPrimary } from '@supernaut/shared-ui';
import { TSocialLinkItemType } from '@supernaut/types';
import cn from 'classnames';

interface SocialLinkProps {
  item: TSocialLinkItemType;
  className?: string;
  iconsClass?: string;
  icons?: boolean;
}

export const SocialLink = ({ item, className, icons, iconsClass }: SocialLinkProps) => {
  const openSocialMediaLink = (url: string) => {
    const userAgent = navigator.userAgent || navigator.vendor;
    let appUrl: any = url; // Default to the provided URL as a fallback.

    if (/iPad|iPhone|iPod|android/i.test(userAgent)) {
      // Detect the platform based on the URL
      if (url.includes('twitter.com')) {
        if (/iPad|iPhone|iPod/.test(userAgent)) {
          appUrl = url.replace(
            'https://twitter.com',
            'twitter://user?screen_name'
          );
        } else if (/android/i.test(userAgent)) {
          appUrl = url.replace(
            'https://twitter.com',
            'twitter://user?screen_name'
          );
        }
      } else if (url.includes('facebook.com')) {
        // Extract page id or username from the URL for Facebook as needed
        if (/iPad|iPhone|iPod/.test(userAgent)) {
          appUrl = 'fb://facewebmodal/f?href=' + url;
        } else if (/android/i.test(userAgent)) {
          appUrl = 'fb://facewebmodal/f?href=' + url;
        }
      } else if (url.includes('tiktok.com')) {
        /* TODO: Implement TikTok deep linking
        // TikTok's scheme may vary and often requires specific paths; adjust as needed
        if (/iPad|iPhone|iPod/.test(userAgent)) {
          // This is an example and may not directly open the app depending on the URL structure
          appUrl = url.replace("https://www.tiktok.com", "snssdk1233://");
        } else if (/android/i.test(userAgent)) {
          appUrl = url.replace("https://www.tiktok.com", "snssdk1233://");
        }

         */
      } else if (url.includes('instagram.com')) {
        if (/iPad|iPhone|iPod/.test(userAgent)) {
          appUrl = url.replace(
            'https://www.instagram.com',
            'instagram://user?username'
          );
        } else if (/android/i.test(userAgent)) {
          appUrl = url.replace(
            'https://www.instagram.com',
            'instagram://user?username'
          );
        }
      }
    }

    // Attempt to open the app-specific URL
    window.location = appUrl;
  };

  if (icons) {
    return (
      <button
        className={cn(className)}
        onClick={() => openSocialMediaLink(item?.url as string)}
        rel="noopener noreferrer"
      >
        <SocialIcons type={item?.type} url={item?.url} props={iconsClass} />
      </button>
    );
  } else {
    return (
      <ButtonPrimary
        onClick={() => openSocialMediaLink(item?.url as string)}
        isDisabled={false}
        hasIcon={false}
        size={'lg'}
        label={item.name}
        classNames={className}
      />
    );
  }
};

export default SocialLink;
