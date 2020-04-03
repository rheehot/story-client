<style>
  .block {
    width: 20rem;
    background: white;
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
    transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
    margin: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .styled-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .block:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
  }

  .content {
    padding: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    color: #212529;
  }

  .description-wrapper {
    flex: 1;
  }

  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #495057;
    margin-bottom: 1.5rem;
  }

  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #868e96;
  }

  .separator {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  .footer {
    padding: 0.625rem 1rem;
    border-top: 1px solid #f8f9fa;
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5;
    justify-content: space-between;
  }

  .userinfo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
  }

  .userinfo img {
    object-fit: cover;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin-right: 0.5rem;
  }

  .userinfo span {
    color: #868e96;
  }

  .userinfo span b {
    color: #868e96;
  }

  .likes {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .block:hover {
      transform: none;
    }
  }

  @media (max-width: 944px) {
    .block:hover {
      width: calc(50% - 2rem);
    }
  }

  @media (max-width: 767px) {
    .block {
      margin: 0;
      width: 100%;
    }
    .block + .block {
      margin-top: 1rem;
    }

    h4 {
      white-space: initial;
    }
  }
</style>

<script>
  import { link } from 'svelte-spa-router';

  import RatioImage from './RatioImage.svelte';

  import { formatDate } from '../../lib/utils.ts';
  import LikeIcon from '../../statics/svg/icon_like.svg';
  export let post;

  const url = `/@${post.user.username}/${post.url_slug}`;
  $: replaceDescription = post.short_description.replace(/&#x3A;/g, ':');
  $: shortDescription = post.short_description.length === 150 ? '...' : '';
  $: releasedAt = formatDate(post.released_at);
</script>

<div class="block">
  {#if post.thumbnail}
    <a href="{url}" class="styled-link" use:link>
      <RatioImage
        widthRatio="{1.916}"
        heightRatio="{1}"
        src="{post.thumbnail}"
        alt="{'post-thumbnail'}"
      />
    </a>
  {/if}
  <div class="content">
    <a href="{url}" use:link class="styled-link">
      <h4>{post.title}</h4>
      <div class="description-wrapper">
        <p>{replaceDescription} {shortDescription}</p>
      </div>
    </a>
    <div class="sub-info">
      <span>{releasedAt}</span>
      <span class="separator">·</span>
      <span>{post.comments_count}개의 댓글</span>
    </div>
  </div>
  <div class="footer">
    <a class="userinfo" use:link href="{`/@${post.user.username}`}">
      <img
        src="{post.user.profile.thumbnail || ''}"
        alt="{`user thumbnail of ${post.user.username}`}"
      />
      <span>
        by
        <b>{post.user.username}</b>
      </span>
    </a>
    <div class="likes">
      <LikeIcon width="{12}" height="{12}" />
      <span style="margin-left: 0.5rem;">{post.likes || 0}</span>
    </div>
  </div>
</div>
