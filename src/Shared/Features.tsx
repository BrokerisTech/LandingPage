import { formatRemove } from "@format-string/core";

export function getLinkWhatApp(whats: string, encodedMessage?: string): string {
  return `https://wa.me/${formatRemove(whats || "")}?text=${encodedMessage}`;
}