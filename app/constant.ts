export const OWNER = "Yidadaa";
export const REPO = "Test";
export const REPO_URL = `http://alikez.love/`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `http://alikez.love/`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export let token = 2;
export function addToken() {
  token += 1;
}
/*
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const REPO = "ChatGPT-Next-Web";
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;*/
