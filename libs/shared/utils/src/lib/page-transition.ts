import gsap from 'gsap';

export const animatePageIn = () => {
  const cover = gsap.utils.toArray('.bar');
  const wrapper = gsap.utils.selector('#page-transition');
  const contentContainer = document.getElementById('content-main');
  if(cover.length) {
    console.log('animatePageIn');
    document.body.classList.add('is-transitioning');
    const tl = gsap.timeline({paused: true});
    tl.set(wrapper, {autoAlpha: 1})
    tl.to(cover, {duration: 1, y: window.innerHeight,scaleY: .2, transformOrigin: "0 0", ease: 'power3.inOut',  stagger: {
        amount: 0.5,
        from: 'end',
        ease: 'power2.inOut',
      },
      onComplete: () => {
        document.body.classList.remove('is-transitioning');}
      }
      )
    //tl.fromTo(contentContainer,{autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'power3.inOut'}, '-=0.8')
    tl.set(wrapper, {autoAlpha: 0})
    tl.play();
  }
}

export const animatePageOut = (href: string, router: any) => {
  const cover = gsap.utils.toArray('.bar');
  const wrapper = gsap.utils.selector('#page-transition');
  const contentContainer = document.getElementById('content-main');
  if (cover.length) {
    console.log('animatePageOut');
    document.body.classList.add('is-transitioning');
    const tl = gsap.timeline({paused: true});
    tl.set(wrapper, {autoAlpha: 1})
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
    //tl.fromTo(contentContainer, {autoAlpha: 1}, {duration: 0, autoAlpha: 1, ease: 'power3.inOut'}, '-=0.8')
    tl.set(wrapper, {autoAlpha: 0})
    tl.play();

  } else {
    router.push(href);
  }
}
