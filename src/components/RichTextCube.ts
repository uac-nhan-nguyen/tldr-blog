
const NBSP = "&nbsp;";
export const A_ONMOUSEDOWN = 'onmousedown="window.open(this.href,this.target)"';
// to trigger tailwind to compile this color
const COMPILE_COLORS = "bg-blue-100";
export const HYPERLINK_WRAP = (href, text) =>
  `<a onmousedown="window.open(this.href, this.target)" class="font-bold underline text-blue-500 cursor-pointer" href="${href}" target="_blank">${text}</a>`;
export const HYPERLINK_WRAP_COLOR = (href, text, className) =>
  `<a onmousedown="window.open(this.href, this.target)" class="${className} whitespace-nowrap underline px-1 py-0.5 inline-block mx-0.5 cursor-pointer no-underline text-[14px]" href="${href}" target="_blank">${text}</a>`;
export const TRANSFORM_URL = (url: string): string | undefined => {
  // https://github.com/uac-nhan-nguyen/tldr-blog
  // https://uac-cloud.atlassian.net/browse/CF-650
  // https://github.com/uac-nhan-nguyen/tldr-blog/pull/372

  const jiraMatch = url.match(
    /https\:\/\/uac-cloud\.atlassian\.net\/browse\/([\w-]+)/
  );
  const githubPRMatch = url.match(/^https\:\/\/github.com\/([\w-]+)\/([\w-]+)\/pull\/([\w-]+)$/);
  const githubMatch = url.match(/https\:\/\/github.com\/([\w-]+)\/([\w-]+)/);
  if (jiraMatch) {
    return HYPERLINK_WRAP_COLOR(url, jiraMatch[1], "font-mono font-bold rounded bg-blue-200 text-black border-solid border-1");
  } else if (githubPRMatch){
    return HYPERLINK_WRAP_COLOR(
      url,
      `${githubPRMatch[2]}#${githubPRMatch[3]}`,
      "font-mono font-bold rounded bg-slate-200 text-black border-solid border-1"
    );
  } else if (githubMatch) {
    return HYPERLINK_WRAP_COLOR(
      url,
      `${githubMatch[1]}/${githubMatch[2]}`,
      "font-mono font-bold rounded bg-slate-200 text-black border-solid border-1"
    );
  }
  return undefined;
};