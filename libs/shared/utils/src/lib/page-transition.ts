import gsap from 'gsap';

let ANIM = false;

export const animatePageIn = () => {
  const cover = gsap.utils.toArray('.bar');
  const wrapper = gsap.utils.selector('#page-transition');
  //const text = gsap.utils.selector('#section-name');
  const text = document.getElementById('section-name');
  const tl = gsap.timeline({paused: true});


  if(cover.length && !ANIM) {
    ANIM = true;
    //document.body.classList.add('is-transitioning');
    tl.set(wrapper, {opacity: 1})
    tl.fromTo(text, {opacity: 1}, {opacity: 0, duration: 0.2, ease: 'power3.In', delay: 0.5})
    tl.to(cover, {duration: 1, y: window.innerHeight,scaleY: .2, transformOrigin: "0 0",  ease: 'power3.inOut',  stagger: {
        amount: 0.5,
        from: 'end',
        ease: 'power2.inOut',
      },
      onComplete: () => {
        ANIM = false;
        //document.body.classList.remove('is-transitioning');
        //}
      }
      }, '-=0.5'
      )
    tl.set(wrapper, {opacity: 0})
    tl.play();
  }
}

export const animatePageOut = (href: string, router: any) => {
  const cover = gsap.utils.toArray('.bar');
  const text = document.getElementById('section-name');
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
      }
    })
    tl.fromTo(text, {opacity: 0, y: 400}, {opacity: 1, y: 0, duration: 0.8, ease: 'power3.Out', delay: 0.2, onComplete: () => {
      console.log('routing')
      router.push(href);
      }}, '-=1')
    tl.set(wrapper, {opacity: 0})
    tl.play();

  } else {
    router.push(href);
  }
}
