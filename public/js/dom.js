import { getData } from "./fetch-data.js";

async function SocialMediaSection
() {
  const contentSocial = document.getElementsByClassName("content_social")[0]
  const ul = document.createElement("ul")
  const data = await getData()

  const listElement = data.social_media.map(data => `
  <li>
    <a href="${data.url}" target="_blnank">
      <figure class="social_card">
        <img src="${data.icon}" alt="${data.name}" width="44" loading="lazy" class="social_card_image" />
        <figcaption class="social_card_title">
          <span class="social_card_title_name">${data.name}</span>
          <span class="social_card_title_username">@${data.username}</span>
        </figcaption>
      </figure>
    </a>
  </li>
  `).join("")
  
  ul.innerHTML = listElement
  contentSocial.appendChild(ul)
}

async function SkillSection() {
  const contentSocial = document.getElementsByClassName("content_skills")[0]
  const ul = document.createElement("ul")
  const data = await getData()

  const listElement = data.skills.map(skill => `
  <li>
    <figure class="social_card">
      <img src="${skill.icon}" alt="${skill.name}" width="28" loading="lazy" class="social_card_image" />
      <figcaption class="social_card_title">
        <span class="social_card_title_name">${skill.name}</span>
      </figcaption>
    </figure>
  </li>
  `).join("")
  
  ul.innerHTML = listElement
  contentSocial.appendChild(ul)
}

SkillSection()
SocialMediaSection()