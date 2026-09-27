---
title: Projects
description: "Things I've built"
permalink: /projects/
---

# Projects

A selection of things I've built.

<ul class="card-grid">
  {% for post in site.posts %}
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
    <li class="card">No posts yet.</li>
  {% endfor %}
</ul>