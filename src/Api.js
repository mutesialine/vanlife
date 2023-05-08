export async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getVans() {
  return fetchData("/api/vans");
}

export async function getHostVans() {
  return fetchData("/api/host/vans");
}
