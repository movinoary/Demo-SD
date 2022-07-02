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
    y: "-100%",
    scale: 0.5,
  },
};

export const animationRight = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "100%",
  },
  end: {
    x: 0,
    opacity: 1,
  },
};
export const animationRightToLeft = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100%",
  },
  end: {
    x: "-100%",
    opacity: 0,
  },
};

export const animationLeft = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
  end: {
    x: 2000,
    opacity: 1,
  },
};

export const transitionFast = {
  duration: 0.3,
};

export const transitionMiddle = {
  duration: 0.5,
};

export const transitionSlow = {
  duration: 1,
};
