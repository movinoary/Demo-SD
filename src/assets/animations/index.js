export const animationScale = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTop = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vh",
    scale: 0.5,
  },
};

export const animationRight = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 200,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const animationLeft = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -200,
  },
  end: {
    x: 200,
    opacity: 1,
  },
};

export const transition = {
  duration: 0.4,
};

export const transitionSlow = {
  duration: 1,
};
