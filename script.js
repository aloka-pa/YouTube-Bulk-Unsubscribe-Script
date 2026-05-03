(async function () {
  let i = 0;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const channels = document.querySelectorAll("ytd-channel-renderer");

  for (const channel of channels) {
    const subBtn = channel.querySelector("ytd-subscribe-button-renderer button");

    if (!subBtn) continue;

    subBtn.click();
    await sleep(1000);

    const confirmBtn = document.querySelector("#confirm-button button");

    if (!confirmBtn) {
      console.log("Confirm button not found, skipping...");
      continue;
    }

    confirmBtn.click();
    i++;

    console.log("channel " + i + " unsubscribed");

    await sleep(1000);
    channel.remove();
  }
})();
