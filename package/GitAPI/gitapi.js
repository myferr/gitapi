class GitAPI {
  baseURL;
  constructor() {
    this.baseURL = "https://api.github.com/";
  }
  async getRepos(username) {
    const response = await fetch(`${this.baseURL}users/${username}/repos`);
    const data = await response.json();
    return data;
  }
  async getRepo(username, repo) {
    const response = await fetch(`${this.baseURL}repos/${username}/${repo}`);
    const data = await response.json();
    return data;
  }
  async getRepoReadme(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/readme`
    );
    const data = await response.json();
    return data;
  }
  async getRepoLanguages(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/languages`
    );
    const data = await response.json();
    return data;
  }
  async getRepoContributors(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/contributors`
    );
    const data = await response.json();
    return data;
  }
  async getRepoBranches(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/branches`
    );
    const data = await response.json();
    return data;
  }
  async getRepoTags(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/tags`
    );
    const data = await response.json();
    return data;
  }
  async getRepoReleases(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/releases`
    );
    const data = await response.json();
    return data;
  }
  async getRepoCommits(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/commits`
    );
    const data = await response.json();
    return data;
  }
  async getRepoIssues(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/issues`
    );
    const data = await response.json();
    return data;
  }
  async getRepoPulls(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/pulls`
    );
    const data = await response.json();
    return data;
  }
  async getRepoProjects(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/projects`
    );
    const data = await response.json();
    return data;
  }
  async getRepoMilestones(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/milestones`
    );
    const data = await response.json();
    return data;
  }
  async getRepoLabels(username, repo) {
    const response = await fetch(
      `${this.baseURL}repos/${username}/${repo}/labels`
    );
    const data = await response.json();
    return data;
  }
  async getUser(username) {
    const response = await fetch(`${this.baseURL}users/${username}`);
    const data = await response.json();
    return data;
  }
  async getUserRepos(username) {
    const response = await fetch(`${this.baseURL}users/${username}/repos`);
    const data = await response.json();
    return data;
  }
  async getUserStarred(username) {
    const response = await fetch(`${this.baseURL}users/${username}/starred`);
    const data = await response.json();
    return data;
  }
  async getUserGists(username) {
    const response = await fetch(`${this.baseURL}users/${username}/gists`);
    const data = await response.json();
    return data;
  }
  async getUserEvents(username) {
    const response = await fetch(`${this.baseURL}users/${username}/events`);
    const data = await response.json();
    return data;
  }
  async getUserFollowers(username) {
    const response = await fetch(`${this.baseURL}users/${username}/followers`);
    const data = await response.json();
    return data;
  }
  async getUserFollowing(username) {
    const response = await fetch(`${this.baseURL}users/${username}/following`);
    const data = await response.json();
    return data;
  }
  async getUserOrgs(username) {
    const response = await fetch(`${this.baseURL}users/${username}/orgs`);
    const data = await response.json();
    return data;
  }
  async getUserPublicRepos(username) {
    const response = await fetch(
      `${this.baseURL}users/${username}/public_repos`
    );
    const data = await response.json();
    return data;
  }
  async getUserPublicGists(username) {
    const response = await fetch(`${this.baseURL}users/${username}/gists`);
    const data = await response.json();
    return data;
  }
  async useAPI(item, data) {
    const response = await fetch(`${this.baseURL}${item}`);
    const returnData = await response.json();
    return returnData[data];
  }
}
const gapi = new GitAPI();
export default gapi;
