'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import { isProd } from '@/utils';
import { pageview } from '@/lib/gtm';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {isProd && (
        <>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-P7TFDXF5`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-P7TFDXF5');
              `,
            }}
          />
          <Script
            id="juicyscore-script"
            strategy="afterInteractive"
            src={`${process.env.PUBLIC_URL}/static/js/juicy/js.js`}
          />
        </>
      )}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
            .then(FingerprintJS => FingerprintJS.load())

          fpPromise
            .then(fp => fp.get())
            .then(result => window.fingerPrint = result)
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={
          isProd
            ? `${process.env.PUBLIC_URL}/static/js/juicy/js.js`
            : `${process.env.NEXT_PUBLIC_JUICYSCORE_ORIGIN}/static/js.js`
        }
      />
    </>
  );
}
