import gsap from 'gsap';

export const animatePageIn = () => {
  const bar = document.getElementById('bar');
  if(bar) {
    console.log('animatePageIn', bar);
    const tl = gsap.timeline();
    tl.set(bar, {yPercent: 0})
    tl.to(bar, {duration: 0.5, yPercent: -100, ease: 'none'})
  }
}

export const animatePageOut = (href: string, router: any) => {
  const bar = document.getElementById('bar');
  if (bar) {
    const tl = gsap.timeline();
    console.log('animatePageOut', bar);
    tl.set(bar, {yPercent: -100})
    tl.to(bar, {
      duration: 0.5, yPercent: 0, ease: 'ease-in-out',
      onComplete: () => {
        router.push(href);
      },
    })
  } else {
    router.push(href);
  }

}
