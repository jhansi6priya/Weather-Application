export function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString([], {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}
