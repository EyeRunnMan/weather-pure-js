const AsyncDelay = async (time) => {
  await new Promise((res) => {
    setTimeout(() => res(), time);
  });
};

export default AsyncDelay;
