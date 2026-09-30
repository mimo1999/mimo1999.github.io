const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(part: string): number | null {
  const [m, y] = part.trim().split(/\s+/);
  const mi = MONTHS.indexOf(m);
  return mi < 0 || !y ? null : Number(y) * 12 + mi;
}

const isoMonths = (iso: string) => {
  const [y, m] = iso.split("-").map(Number);
  return y * 12 + (m - 1);
};

/**
 * "Apr 2025 - present" -> "1 year, 6 months".
 * With exact `start`/`end` (end exclusive) the span is used as given; otherwise
 * both end months of the period string are counted.
 */
export function formatDuration(
  role: { period: string; start?: string; end?: string },
  now = new Date()
): string {
  const { period } = role;
  let total: number;
  if (role.start && role.end) {
    total = isoMonths(role.end) - isoMonths(role.start);
  } else {
    const [start, end] = period.split(" - ");
    const s = parse(start);
    const e = /present/i.test(end) ? now.getFullYear() * 12 + now.getMonth() : parse(end);
    if (s === null || e === null) return period;
    total = e - s + 1;
  }
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [
    years ? `${years} year${years > 1 ? "s" : ""}` : "",
    months ? `${months} month${months > 1 ? "s" : ""}` : "",
  ].filter(Boolean);
  return parts.join(", ");
}
