import os
import re
import time

from watchdog.events import FileSystemEventHandler
from watchdog.observers.polling import PollingObserver


class ChangeHandler(FileSystemEventHandler):
    def __init__(self) -> None:
        super().__init__()
        self.target_dir = "/minecraft/"  # 監視するディレクトリの指定
        self.target_file = "latest.log"  # 監視対象のファイルの指定

    # フォルダ変更時のイベント
    def on_modified(self, event):
        filepath = event.src_path

        # ファイルでない場合無視する
        if os.path.isfile(filepath) is False:
            return

        # 監視対応のファイルでない場合無視する
        filename = os.path.basename(filepath)
        if filename != self.target_file:
            return

        self.get_log(filepath)

    def get_log(self, filepath: str):
        # 最終行のテキストを取得
        with open(filepath, "r") as f:
            end_txt = f.readlines()[-1]

        # 送信メッセージ作成
        text = self.message_creation(end_txt)
        print(text)

        return text

    # 取得するメッセージ
    def message_creation(self, text: str):
        mach = re.findall(": (.*) joined the game", text)
        if len(mach) == 1:
            return str(mach[0]) + " が参加しました"

        mach = re.findall(": (.*) left the game", text)
        if len(mach) == 1:
            return str(mach[0]) + " が退出しました"

        mach = re.findall(": <(.*)> (.*)", text)
        if len(mach) == 2:
            print(mach)
            return f"{str(mach[0])} says {str(mach[1])}"

        return text


class MCDataBase:
    def __init__(self) -> None:
        self.joined_member: dict[str, dict] = dict()


if __name__ in "__main__":
    while 1:
        event_handler = ChangeHandler()
        observer = PollingObserver()
        observer.schedule(event_handler, event_handler.target_dir, recursive=True)
        observer.start()
        try:
            while True:
                time.sleep(0.1)
        except KeyboardInterrupt:
            observer.stop()
        observer.join()
