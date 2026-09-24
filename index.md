---
description: "Description"
permalink: /
---

<section class="hero">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
  <div class="hero-actions">
    <a class="btn" href="{{ '/projects/' | relative_url }}">View Projects</a>
    <a class="btn-secondary" href="{{ '/about/' | relative_url }}">About Me</a>
  </div>
</section>

<section class="posts-preview" id="latest-posts">
  <h2>Latest Posts</h2>

  <ul class="post-list">
    {% for post in site.posts limit: 5 %}
      <li class="post-item">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>

        {% if post.date %}
          <span class="post-date">
            {{ post.date | date: "%B %-d, %Y" }}
          </span>
        {% endif %}

        {% if post.description %}
          <p class="post-excerpt">{{ post.description }}</p>
        {% endif %}
      </li>
    {% else %}
      <li class="post-item">
        No posts yet — add a markdown file to <code>_posts/</code> to get started.
      </li>
    {% endfor %}
  </ul>
</section>
