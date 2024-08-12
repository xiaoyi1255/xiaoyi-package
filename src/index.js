const url = '';
export function reportBySendBeacon(data) {
  if (!navigator?.sendBeacon) {
    return reportByImg(data)
  }
  return navigator.sendBeacon(url, JSON.stringify(data));
}

export function reportByImg(data={}) {
  const img = new Image();
  const query = new URLSearchParams(data).toString();
  img.src = `${url}?data=${JSON.stringify(query)}`;
  return new Promise((resolve, reject) => {
    img.onload = () => resolve('Success');
    img.onerror = () => reject('Error');
  })
}