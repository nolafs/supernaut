import gsap from 'gsap';

let ANIM = false;

export const animatePageIn = () => {
  const cover = gsap.utils.toArray('.bar');
  const wrapper = document.getElementById('page-transition');
  const section = document.getElementById('section-wrapper');
  const st = document.getElementById('s-t');
  const sti = document.getElementById('s-t-i');
  const sp = document.getElementById('s-p');
  const spi = document.getElementById('s-p-i');

  const tl = gsap.timeline({paused: true});


  if(cover.length) {
    ANIM = true;
    //document.body.classList.add('is-transitioning');
    tl.set(wrapper, {opacity: 1})
    tl.fromTo(sp, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0, duration: 0.5, ease: 'power2.Out'})
    tl.fromTo(sti, {y: 0}, {y: 200, duration: 0.5, ease: 'power3.inOut', delay: 0.5})
    tl.fromTo(spi, {y: 0}, {y: -250, duration: 0.5, ease: 'power3.inOut'}, '-=0.5')

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
      }, '-=0.2'
      )
    tl.set(wrapper, {opacity: 0})
    tl.play();
  }
}

export const animatePageOut = (href: string, router: any) => {
  const cover = gsap.utils.toArray('.bar');
  const section = document.getElementById('section-wrapper');
  const st = document.getElementById('s-t');
  const sti = document.getElementById('s-t-i');
  const sp = document.getElementById('s-p');
  const spi = document.getElementById('s-p-i');
  const wrapper = document.getElementById('page-transition');

  if (cover.length) {

    //document.body.classList.add('is-transitioning');
    const tl = gsap.timeline({paused: true, onComplete: () => {
      console.log('router', router)
      router.push(href);
      }});
    tl.set(wrapper, {opacity: 1})
    tl.set(cover, {y:-window.innerHeight, scaleY: .2})
    tl.set(section, {opacity: 0})
    tl.set(sp, {opacity: 0, yPercent: 0})
    tl.set(sti, {y: 0})

    tl.to(cover,{
      duration: 1, y: 0, scaleY: 1, transformOrigin: "0 0", ease: 'power3.inOut', stagger: {
        amount: 0.5,
        from: 'end',
        ease: 'power2.inOut',
      }
    })
    tl.fromTo(section, {opacity: 0, y: 400}, {opacity: 1, y: 0, duration: 0.8, ease: 'power3.Out', delay: 0.2}, '-=1')
    tl.play();

  } else {
    router.push(href);
  }
}
