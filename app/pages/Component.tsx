'use client';
import Script from 'next/script';

export function Component() {
  return (
    <>
      <Script
        src="https://webcodingcenternextjsscript-txa1--3000--88b6dd69.local-credentialless.webcontainer.io/myscript.js"
        strategy="afterInteractive"
        onLoad={() => console.log('loaded')}
        onReady={() => console.log('ready')}
        onError={() => console.log('error!')}
      />
    </>
  );
}
