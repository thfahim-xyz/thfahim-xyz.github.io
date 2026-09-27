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

  <ul class="card-grid">
    {% for post in site.posts limit: 5 %}
      <li class="card">
          <a href="{{ post.url | relative_url }}">
            <h3>{{ post.title }}</h3>

            {% if post.description %}
              <p>{{ post.description }}</p>
            {% endif %}

            {% if post.tags %}
              <p class="tags">
                {% for tag in post.tags %}
                  {{ tag }}{% unless forloop.last %} &middot; {% endunless %}
                {% endfor %}
              </p>
            {% endif %}
          </a>
      </li>
    {% else %}
      <li class="card">
        No posts yet.
      </li>
    {% endfor %}
  </ul>
</section>
