---
title: Blog
description: "Notes, ideas, and things I've learned."
permalink: /blog/
---

# Blog

A collection of notes, ideas, and things I've learned.

<ul class="post-list">
  {% for post in site.posts %}
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
    <li class="post-item">No posts yet.</li>
  {% endfor %}
</ul>