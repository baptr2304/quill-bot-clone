<script setup lang="ts">
import { EventBus } from '@/eventBus'

function toggleSidebar() {
  EventBus.emit('toggleSidebar')
}
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.headerLeft">
      <div :class="$style.menuBtn" @click="toggleSidebar">
        <img src="@/assets/svg/menu-hambuger-svgrepo-com.svg" alt="">
      </div>
      <div :class="$style.headerLogo">
        <svg height="35" fill="none" viewBox="0 0 416 112"><path fill="#66AA4C" d="M158.425 81.65c2.895.76 5.905 1.786 9.027 3.08 6.522 2.687 11.231 4.03 14.127 4.03.982 0 2.468-.253 4.457-.76v1.977c-2.82 1.47-4.91 2.865-6.27 4.183-2.191-.279-4.168-.659-5.93-1.14-1.763-.457-4.445-1.357-8.046-2.7-5.943-2.18-9.934-3.27-11.974-3.27-.579 0-1.196.126-1.85.38-.63.253-2.229 1.102-4.798 2.547v-2.51c4.306-2.915 7.391-4.854 9.255-5.818-5.691 0-10.551-1.128-14.58-3.384-4.029-2.282-7.177-5.527-9.443-9.735-2.267-4.209-3.4-9.14-3.4-14.793 0-8.264 2.669-14.944 8.008-20.04 5.338-5.096 12.452-7.644 21.341-7.644 8.713 0 15.537 2.37 20.473 7.112 4.96 4.715 7.441 11.002 7.441 18.861 0 6.034-1.461 11.332-4.382 15.895-2.896 4.538-6.698 8.024-11.407 10.458-3.374 1.75-7.391 2.84-12.049 3.27ZM136.97 50.656c0 5.704.969 10.673 2.908 14.907 1.939 4.233 4.533 7.415 7.781 9.545 3.249 2.104 6.963 3.156 11.143 3.156 3.878 0 7.265-.9 10.161-2.7 2.896-1.8 5.175-4.475 6.837-8.024 1.662-3.549 2.493-7.884 2.493-13.005 0-5.375-.919-9.963-2.758-13.766-1.838-3.803-4.356-6.655-7.554-8.556-3.198-1.927-6.988-2.89-11.369-2.89-4.004 0-7.454.85-10.35 2.548s-5.175 4.183-6.837 7.453c-1.637 3.27-2.455 7.048-2.455 11.332ZM218.22 80.927l.453-6.845-2.229 2.434c-1.737 1.901-3.513 3.245-5.326 4.03-1.787.761-4.003 1.141-6.648 1.141-2.266 0-4.217-.481-5.854-1.445-1.637-.963-2.833-2.205-3.589-3.726-.73-1.547-1.095-3.98-1.095-7.302 0-1.724.038-3.726.113-6.008l.114-6.122c0-4.285-.126-6.668-.378-7.15-.227-.481-1.02-.722-2.38-.722h-3.361v-2.091c3.424-.305 6.585-.939 9.48-1.902l3.135-1.179c.429 0 .643.317.643.951l-.265 3.879c-.352 5.374-.529 10.369-.529 14.983 0 4.613.189 7.567.567 8.86.378 1.267 1.171 2.332 2.38 3.194 1.208.837 2.681 1.255 4.419 1.255 2.342 0 4.482-.76 6.421-2.282 1.964-1.52 3.249-3.054 3.853-4.6.327-.888.491-3.563.491-8.025 0-7.504-.138-11.585-.415-12.244-.252-.533-1.385-.799-3.4-.799h-2.984v-2.091c2.594-.305 4.797-.66 6.61-1.065 1.813-.406 3.727-1.014 5.742-1.825.251-.127.478-.19.68-.19.428 0 .642.24.642.722l-.151 3.536c-.378 8.67-.567 16.301-.567 22.893 0 3.701.189 5.818.567 6.35.554.786 1.75 1.18 3.588 1.18h2.191v2.205c-3.148-.178-5.817-.266-8.008-.266-1.637 0-3.274.088-4.91.266ZM242.924 27.156c1.159 0 2.153.431 2.984 1.293.831.837 1.247 1.85 1.247 3.042 0 1.192-.416 2.206-1.247 3.042-.831.837-1.825 1.255-2.984 1.255-1.183 0-2.191-.418-3.022-1.255-.831-.836-1.246-1.85-1.246-3.042 0-1.191.415-2.205 1.246-3.042.831-.862 1.839-1.293 3.022-1.293Zm3.022 16.846.906.57a89.794 89.794 0 0 0-.339 6.275c-.177 7.403-.265 12.866-.265 16.39 0 3.296.113 6.11.34 8.442.101.913.34 1.546.718 1.901.377.355 1.284.621 2.719.799l2.569.342v2.206a209.887 209.887 0 0 0-10.048-.266c-2.971 0-5.968.088-8.989.266V78.72l3.248-.342c1.259-.102 2.027-.33 2.304-.685.302-.38.491-1.61.567-3.688.126-3.22.189-7.656.189-13.31 0-3.93-.063-6.959-.189-9.088-.051-.786-.277-1.344-.68-1.673-.378-.33-1.247-.495-2.606-.495h-2.833v-2.243c3.072-.457 5.326-.875 6.761-1.255 1.46-.38 3.336-1.027 5.628-1.94ZM267.629 24.456c-.428 7.428-.642 14.146-.642 20.155v19.546c0 7.757.163 12.156.491 13.195.176.533 1.007.875 2.493 1.027l3.21.342v2.206a121.925 121.925 0 0 0-7.856-.266c-2.77 0-6.396.088-10.879.266V78.72l3.249-.266c1.435-.127 2.253-.494 2.455-1.103.327-.989.491-5.488.491-13.5V44.421l-.038-7.302-.113-4.981c0-1.242-.139-2.003-.416-2.282-.403-.405-1.246-.608-2.53-.608h-3.098v-2.282c5.238-.482 9.418-1.47 12.541-2.966l.642.456ZM288.594 24.456c-.428 7.428-.642 14.146-.642 20.155v19.546c0 7.757.163 12.156.491 13.195.176.533 1.007.875 2.493 1.027l3.21.342v2.206a121.901 121.901 0 0 0-7.856-.266c-2.77 0-6.396.088-10.879.266V78.72l3.249-.266c1.435-.127 2.253-.494 2.455-1.103.327-.989.491-5.488.491-13.5V44.421l-.038-7.302-.113-4.981c0-1.242-.139-2.003-.416-2.282-.402-.405-1.246-.608-2.53-.608h-3.098v-2.282c5.238-.482 9.418-1.47 12.541-2.966l.642.456Z" /><path fill="#479455" d="M302.07 26.826h19.105c2.382 0 4.582.28 6.601.841 2.071.56 3.832 1.402 5.281 2.523 1.502 1.07 2.667 2.472 3.495 4.205.88 1.682 1.32 3.67 1.32 5.964 0 3.109-.88 5.657-2.64 7.645-1.76 1.937-4.039 3.364-6.834 4.282v.153c1.656.102 3.21.535 4.659 1.3a11.455 11.455 0 0 1 3.728 2.905c1.087 1.172 1.942 2.549 2.563 4.129.621 1.58.932 3.287.932 5.122 0 2.447-.518 4.613-1.553 6.5-.984 1.834-2.356 3.389-4.116 4.663-1.761 1.274-3.806 2.243-6.136 2.905-2.33.663-4.841.994-7.533.994H302.07V26.826Zm7.455 22.478h10.174c1.398 0 2.719-.127 3.961-.382 1.243-.306 2.33-.79 3.262-1.453a6.87 6.87 0 0 0 2.175-2.523c.569-1.02.854-2.268.854-3.746 0-2.141-.699-4.002-2.097-5.582-1.398-1.58-3.598-2.37-6.601-2.37h-11.728v16.056Zm0 25.23h10.951a25.02 25.02 0 0 0 3.728-.305 12.555 12.555 0 0 0 3.883-1.376 9.94 9.94 0 0 0 3.029-2.83c.828-1.171 1.242-2.726 1.242-4.663 0-3.211-1.061-5.607-3.184-7.187-2.123-1.63-4.996-2.447-8.62-2.447h-11.029v18.809ZM353.318 62.837c0 1.835.285 3.542.855 5.123.569 1.529 1.372 2.854 2.407 3.975 1.036 1.07 2.304 1.937 3.806 2.6 1.501.612 3.184.917 5.048.917 1.864 0 3.546-.305 5.048-.917 1.501-.663 2.77-1.53 3.805-2.6 1.036-1.121 1.838-2.446 2.408-3.975.569-1.58.854-3.288.854-5.123 0-1.835-.285-3.517-.854-5.046-.57-1.58-1.372-2.905-2.408-3.976-1.035-1.121-2.304-1.988-3.805-2.6-1.502-.662-3.184-.993-5.048-.993-1.864 0-3.547.331-5.048.994-1.502.611-2.77 1.478-3.806 2.6-1.035 1.07-1.838 2.395-2.407 3.975-.57 1.529-.855 3.211-.855 5.046Zm-7.455 0c0-2.65.492-5.123 1.475-7.416a19.882 19.882 0 0 1 4.194-6.04c1.76-1.733 3.831-3.084 6.213-4.053 2.382-1.019 4.945-1.529 7.689-1.529 2.744 0 5.307.51 7.688 1.53 2.382.968 4.453 2.319 6.213 4.052a18.775 18.775 0 0 1 4.117 6.04c1.035 2.293 1.553 4.766 1.553 7.416 0 2.65-.518 5.148-1.553 7.493a18.774 18.774 0 0 1-4.117 6.04c-1.76 1.682-3.831 3.033-6.213 4.052-2.381.969-4.944 1.453-7.688 1.453-2.744 0-5.307-.484-7.689-1.453-2.382-1.02-4.453-2.37-6.213-4.052a19.88 19.88 0 0 1-4.194-6.04c-.983-2.345-1.475-4.843-1.475-7.493ZM411.934 50.68h-10.018V67.12c0 1.019.026 2.038.078 3.058a8.79 8.79 0 0 0 .543 2.676c.363.764.88 1.401 1.553 1.911.725.459 1.761.688 3.107.688.828 0 1.683-.076 2.563-.229a7.473 7.473 0 0 0 2.407-.841v6.27c-.828.458-1.915.764-3.261.917-1.295.204-2.304.306-3.029.306-2.693 0-4.79-.357-6.291-1.07-1.45-.765-2.537-1.734-3.262-2.906-.673-1.172-1.087-2.472-1.242-3.9a63.165 63.165 0 0 1-.156-4.434V50.68h-8.077v-5.963h8.077V34.548h6.99v10.169h10.018v5.963Z" /><path fill="#499557" d="M56 109c29.27 0 53-23.729 53-52.996C109.009 26.73 85.278 3 56 3 26.73 3 3 26.729 3 55.996 3 85.27 26.73 109 56 109Z" /><path d="M67.291 15.887c-3.588 3.822-9.595 13.875-11.891 22.09-1.006-.667-2.15-2.46-1.396-5.945.018-.052.07-.095.122-.078l1.395.122c.104.008.156-.122.078-.191l-1.248-1.196c-.026-.026-.044-.052-.044-.078.052-1.283.295-3.822.859-4.48.034-.044.095-.044.138-.018l1.829 1.222c.095.07.217-.052.147-.147l-1.386-2.054c-.035-.026-.035-.06-.018-.104.806-1.638 2.47-4.88 3.147-5.512.043-.043.095-.026.138 0l1.318 1.092c.095.07.216-.017.173-.121l-.945-2.384c-.008-.026-.008-.069.017-.095 1.145-1.664 3.849-4.975 5.894-5.39.044-.018.096.008.122.051l.728 1.274c.052.104.216.052.199-.069l-.19-2.002c0-.035.008-.078.051-.104 1.144-.598 4.282-1.647 8.277-1.456.078-.017.122.052.104.121l-2.686 8.19c-.009.052-.061.078-.104.078l-2.002-.164c-.122-.018-.165.147-.07.199l1.76 1.075c.06.026.069.095.043.147l-1.725 2.947c-.008.026-.052.052-.078.052l-2.418.216c-.121.017-.13.165-.026.217l1.76.728c.069.026.095.095.052.165l-1.803 3.145c-.009.026-.052.052-.078.052l-3.025.27a.105.105 0 0 0-.043.198l1.586.858c.052.026.069.096.052.148-.624 1.23-2.037 3.804-3.233 4.073l-1.95.511c-.104.026-.104.191 0 .217l1.612.407c.06.009.104.096.078.148-.936 2.045-2.86 4.602-6.024 4.047 1.95-8.12 6.275-15.869 11.25-22.152L68 16c-.017-.156-.042-.33-.414-.339a.27.27 0 0 0-.217.122l-.078.104Zm2.119 80.772a3.087 3.087 0 0 1 3.085-3.086 3.092 3.092 0 0 1 3.086 3.086 3.087 3.087 0 0 1-6.171 0Zm-5.487-19.223H47.697v3.094h16.225v-3.094Zm-36.19-3.744V40.465c0-.815.66-1.474 1.474-1.474h53.598c.815 0 1.473.66 1.473 1.474v33.227c0 .815-.658 1.473-1.473 1.473H29.207a1.472 1.472 0 0 1-1.473-1.473Zm8.538-16.406a4.764 4.764 0 0 0 4.767 4.767 4.77 4.77 0 0 0 4.767-4.767 4.764 4.764 0 0 0-4.767-4.766 4.764 4.764 0 0 0-4.767 4.766Zm29.945 0a4.764 4.764 0 0 0 4.767 4.767 4.77 4.77 0 0 0 4.767-4.767 4.764 4.764 0 0 0-4.767-4.766 4.764 4.764 0 0 0-4.767 4.766ZM21.272 96.017a52.283 52.283 0 0 0 5.824 4.394v-9.186c-1.672 0-4.29 1.516-5.824 4.792ZM56.011 109a52.781 52.781 0 0 1-26.617-7.176v-8.25h30.855v15.244a52.461 52.461 0 0 1-4.238.182ZM35.972 96.182h-2.098c-.606 0-1.1.485-1.1 1.1 0 .607.494 1.101 1.1 1.101h21.894c.607 0 1.1-.494 1.1-1.1 0-.607-.493-1.1-1.1-1.1H35.972Zm45.174-13.338h-50.27c-.815 0-1.473.66-1.473 1.474v6.959h33.143V108.584a52.582 52.582 0 0 0 20.073-6.76V84.318c0-.815-.658-1.474-1.473-1.474Zm-8.65 19.179a5.373 5.373 0 1 1 0-10.746 5.372 5.372 0 1 1 0 10.746Zm12.417-10.798c1.673 0 4.29 1.516 5.825 4.792a54.612 54.612 0 0 1-5.825 4.403v-9.195Z" fill="#FFF" clip-rule="evenodd" fill-rule="evenodd" /></svg>
      </div>
    </div>
    <div :class="$style.headerItemLabel">
      Paraphraser
    </div>
    <div :class="$style.headerRight">
      <div :class="$style.headerRightBtnUpgrade">
        <img src="@/assets/svg/diamond-svgrepo-com.svg" alt="">
        <span>Upgrade to Premium</span>
      </div>
      <div :class="[$style.headerRightBtnLanguage, $style.headerRightBtn]">
        <!-- tooltip -->
        <img
          :class="$style.headerRightBtnLanguageImg"
          src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
          alt=""
        >
        <div :class="$style.headerRightBtnLanguageToolTip">
          <div :class="$style.btnLanguageToolTipText">
            <div :class="$style.languageToolTipTextItem">
              <span>I write in</span>
            </div>
            <div :class="$style.languageToolTipTextItem">
              <img
                :class="$style.languageToolTipTextItemFlag"
                src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                alt=""
              >
              <span>American English</span>
            </div>
            <div :class="$style.languageToolTipTextItem">
              <img
                :class="$style.languageToolTipTextItemFlag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png"
                alt=""
              >
              <span>Canadian English</span>
            </div>
            <div :class="$style.languageToolTipTextItem">
              <img
                :class="$style.languageToolTipTextItemFlag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                alt=""
              >
              <span>British English</span>
            </div>
            <div :class="$style.languageToolTipTextItem">
              <img
                :class="$style.languageToolTipTextItemFlag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                alt=""
              >
              <span>British English</span>
            </div>
          </div>
        </div>
      </div>
      <div :class="[$style.headerRightBtnMode, $style.headerRightBtn, $style.headerRightBtnToolTip]">
        <div :class="[$style.tooltipText, $style.tooltipMode]">
          Switch to Dark Mode
        </div>
        <svg
          fill="#5F6368" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv" focusable="false"
          aria-hidden="true" viewBox="0 0 24 24" data-testid="Brightness2Icon"
          style="transform: rotate(150deg); font-size: 18px;"
        >
          <path
            d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"
          />
        </svg>
      </div>
      <div :class="[$style.headerRightBtnLogin, $style.headerRightBtn, $style.headerRightBtnToolTip]">
        <div :class="[$style.tooltipText, $style.tooltipLogin]">
          Login
        </div>
        <svg
          fill="#5F6368" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv" focusable="false"
          aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonOutlineOutlinedIcon"
        >
          <path
            d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #e1d8d8;
  min-height: 3rem;
  top: 0;
  background-color: white;
  box-sizing: border-box;
  z-index: 10;
}
.menuBtn {
 margin-left: 0.75rem;
}

.menuBtn img {
  width: 1.5rem;
  height: 1.5rem;
}

.headerLeft {
  display: flex;
  align-items: center;
  width: 30%;
}

.headerLogo {
  margin-left: 3.5rem;
}

.headerItemLabel {
  font-size: 1rem;
  font-weight: 700;
  color: #252525;
}

.headerRight {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
  width: 30%;

}

.headerRightBtnUpgrade {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background-color: #499557;
  padding: 0.5rem 0.844rem;
  height: 2.313rem;
  border-radius: 9999px;
  cursor: pointer;
}
.headerRightBtnUpgrade:hover {
  background-color: var(--color-primary);
}

.headerRightBtnUpgrade img {
  width: 1.125rem;
  height: 1.25rem;
}

.headerRightBtnUpgrade span {
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

}

.headerRightBtnLanguage {
  width: 1.875rem;
  height: 1.875rem;
  position: relative;
}

.headerRightBtnLanguageToolTip {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 3rem;
  left: -8rem;
  background-color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.headerRightBtnLanguage:hover .headerRightBtnLanguageToolTip {
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in-out;
  z-index: 9999;

}

.languageToolTipTextItem {
  display: flex;
  align-items: center;
  padding: 0.6rem 2rem;
  cursor: pointer;
}

.languageToolTipTextItem:not(:last-child) {
  border-bottom: 1px solid #e1d8d8;
}

.languageToolTipTextItemFlag {
  width: 1.5rem !important;
  height: 1.5rem !important;
  border-radius: 50%;
}

.btnLanguageToolTipText span {
  font-size: 0.875rem;
  font-weight: 600;
  color: #252525;
  white-space: nowrap;
  margin-left: 0.5rem;
}

.headerRightBtnLanguage img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.headerRightBtn {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerRightBtnToolTip{
  position: relative;
}
.tooltipText{
  position: absolute;
  top: 2rem;
  background-color: rgb(35, 34, 34);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  font-size: 0.625rem;
  color: white;
  padding: 0.2rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease-in-out;

}
.tooltipMode{
  left: -2rem;
}
.tooltipLogin{
  right: 0.2rem;
}
.headerRightBtnToolTip:hover .tooltipText{
  opacity: 1;
  visibility: visible;

}
.headerRightBtnToolTip:hover svg{
  fill: var(--color-primary);
}

.headerRightBtn svg {
  width: 1rem;
  height: 1rem;
}
</style>
