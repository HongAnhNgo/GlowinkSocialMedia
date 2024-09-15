const DailyChallengeLog = {
  data() {
    return {};
  },
  methods: {},
  template: `
    <div class="daily-challenge-log">
          <h2>Your Daily Challenge Log</h2>
          <div class="log-container">
            <div class="log-item">
              <div class="log-item-left">
                <div class="log-item-left-top">
                  <span>Reading</span>
                  <span class="material-symbols-rounded display-primary-color">
                    book_2
                  </span>
                </div>
                <div class="log-item-left-bottom">
                  <p>15 min</p>
                </div>
              </div>
              <div class="log-item-center">
                <div class="log-item-center-top">
                  <div class="progress-bar">
                    <div class="progress"></div>
                  </div>
                </div>
                <div class="log-item-center-bottom">
                  <p class="log-item-center-bottom-left">Continuing...</p>
                  <p class="log-item-center-bottom-right">0/15</p>
                </div>
              </div>
              <div class="log-item-right">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  class="challenge-complete-checkbox"
                />
              </div>
            </div>
            <div class="log-item">
              <div class="log-item-left">
                <div class="log-item-left-top">
                  <span>Running</span>
                  <span class="material-symbols-rounded display-primary-color">
                    directions_run
                  </span>
                </div>
                <div class="log-item-left-bottom">
                  <p>45 min</p>
                </div>
              </div>
              <div class="log-item-center">
                <div class="log-item-center-top">
                  <div class="progress-bar">
                    <div class="progress w-25"></div>
                  </div>
                </div>
                <div class="log-item-center-bottom">
                  <p class="log-item-center-bottom-left">Continuing...</p>
                  <p class="log-item-center-bottom-right">15/45</p>
                </div>
              </div>
              <div class="log-item-right">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  class="challenge-complete-checkbox"
                />
              </div>
            </div>
            <div class="log-item">
              <div class="log-item-left">
                <div class="log-item-left-top">
                  <span>Meditating</span>
                  <span class="material-symbols-rounded display-primary-color">
                    self_improvement
                  </span>
                </div>
                <div class="log-item-left-bottom">
                  <p>15 min</p>
                </div>
              </div>
              <div class="log-item-center">
                <div class="log-item-center-top">
                  <div class="progress-bar">
                    <div class="progress w-100"></div>
                  </div>
                </div>
                <div class="log-item-center-bottom">
                  <p class="log-item-center-bottom-left">Complete!</p>
                  <p class="log-item-center-bottom-right">15/15</p>
                </div>
              </div>
              <div class="log-item-right">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  class="challenge-complete-checkbox"
                  checked
                />
              </div>
            </div>
            <div class="log-item">
              <div class="log-item-left">
                <div class="log-item-left-top">
                  <span>Writing Diary</span>
                  <span class="material-symbols-rounded display-primary-color">
                    book_2
                  </span>
                </div>
                <div class="log-item-left-bottom">
                  <p>15 min</p>
                </div>
              </div>
              <div class="log-item-center">
                <div class="log-item-center-top">
                  <div class="progress-bar">
                    <div class="progress"></div>
                  </div>
                </div>
                <div class="log-item-center-bottom">
                  <p class="log-item-center-bottom-left">Continuing...</p>
                  <p class="log-item-center-bottom-right">0/15</p>
                </div>
              </div>
              <div class="log-item-right">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  class="challenge-complete-checkbox"
                />
              </div>
            </div>
            <div class="log-item">
              <div class="log-item-left">
                <div class="log-item-left-top">
                  <span>Learn Cooking</span>
                  <span class="material-symbols-rounded display-primary-color">
                    cooking
                  </span>
                </div>
                <div class="log-item-left-bottom">
                  <p>45 min</p>
                </div>
              </div>
              <div class="log-item-center">
                <div class="log-item-center-top">
                  <div class="progress-bar">
                    <div class="progress"></div>
                  </div>
                </div>
                <div class="log-item-center-bottom">
                  <p class="log-item-center-bottom-left">Continuing...</p>
                  <p class="log-item-center-bottom-right">0/45</p>
                </div>
              </div>
              <div class="log-item-right">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  class="challenge-complete-checkbox"
                />
              </div>
            </div>
          </div>
        </div>
    `,
};
