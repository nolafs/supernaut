import gsap from 'gsap';

let ANIM = false;

export const animatePageIn = () => {
  const cover = gsap.utils.toArray('.bar');
  const wrapper = gsap.utils.selector('#page-transition');
  const contentContainer = document.getElementById('content-main');
  const tl = gsap.timeline({paused: true});
  tl.set(wrapper, {opacity: 0})
  if(cover.length && !ANIM) {
    ANIM = true;
    console.log('animatePageIn');
    document.body.classList.add('is-transitioning');

    tl.set(wrapper, {opacity: 1})
    tl.to(cover, {duration: 1, y: window.innerHeight,scaleY: .2, transformOrigin: "0 0", ease: 'power3.inOut',  stagger: {
        amount: 0.5,
        from: 'end',
        ease: 'power2.inOut',
      },
      onComplete: () => {
        ANIM = false;
        document.body.classList.remove('is-transitioning');}
      }
      )
    tl.set(wrapper, {opacity: 0})
    tl.play();
  }
}

export const animatePageOut = (href: string, router: any) => {
  const cover = gsap.utils.toArray('.bar');
  const wrapper = gsap.utils.selector('#page-transition');
  if (cover.length) {
    console.log('animatePageOut');
    document.body.classList.add('is-transitioning');
    const tl = gsap.timeline({paused: true});
    tl.set(wrapper, {opacity: 1})
    tl.set(cover, {y:-window.innerHeight, scaleY: .2})
    tl.to(cover,{
      duration: 1, y: 0, scaleY: 1, transformOrigin: "0 0", ease: 'power3.inOut', stagger: {
        amount: 0.5,
        from: 'end',
        ease: 'power2.inOut',
      }, onComplete: () => {
        console.log('href', href)
        router.push(href);
        //document.body.classList.remove('is-transitioning');
      }
    })
    tl.set(wrapper, {opacity: 0})
    tl.play();

  } else {
    router.push(href);
  }
}
