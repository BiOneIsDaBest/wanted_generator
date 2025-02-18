# PA WANTED GENERATURE
This is a JavaScript-based project designed to manage violations and calculate penalties for different levels of offenses. It supports dynamic interaction through a user-friendly interface, with features like custom logic for specific scenarios, such as "Combo Súng" and configurable maximum penalties.

Features
1. Violation Levels
Level 1 to Level 5: Includes a wide range of violations with dynamic fine and punishment time calculations.
Level 6: Supports user input to specify the number of offenses for each violation. The penalty is calculated accordingly, with a maximum of 5 offenses (1000 minutes).
2. Combo Súng Logic
Special case for Level 2 offenses.
Automatically selects related offenses ("Tàng trữ vũ khí nóng trái phép," "Sử dụng vũ khí nóng trái phép," "Sử dụng vũ khí nóng nơi công cộng") as a combo.
Displays only "Sử dụng vũ khí nóng nơi công cộng ( KTNVQS +60p )" in the penalty summary.
Fixed penalty: 30 minutes.
3. Dynamic User Interaction
Uses prompts for Level 6 offenses to collect the number of times an offense has been committed.
Automatically disables related offenses when Combo Súng is selected.
4. Penalty Limit
For Level 1-5 offenses, the total penalty is capped at 500 minutes.
5. Copy to Clipboard
Users can copy the penalty summary (including name, violations, total penalty time, and fines) to the clipboard.

@created by BiOneIsDaBest // mã nguồn mở ae dùng để cre cho tui là đc nhé!!!
- "This is an open-source project. Feel free to use it, just make sure to credit me!"

# Contact
For questions or feedback, please contact:

Name: BiOne

Email: [[Gmail]](bione.4477@gmail.com)

GitHub: [[GitHub Profile]](https://github.com/BiOneIsDaBest)
