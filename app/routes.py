from flask import Blueprint, render_template, request, redirect, url_for
from .models import Note
from . import db

main = Blueprint('main', __name__)

@main.route("/", methods=["GET", "POST"])
def index():
    q = request.args.get("q", "")
    if q:
        notes = Note.query.filter(
            (Note.title.contains(q)) | (Note.content.contains(q))
        ).order_by(Note.created_at.desc()).all()
    else:
        notes = Note.query.order_by(Note.created_at.desc()).all()
    return render_template("index.html", notes=notes)

@main.route("/add", methods=["POST"])
def add_note():
    title = request.form.get("title")
    content = request.form.get("content")

    if not title:
        flash("Title is required!")
        return redirect(url_for("main.index"))

    new_note = Note(title=title, content=content)
    db.session.add(new_note)
    db.session.commit()
    return redirect(url_for("main.index"))


@main.route("/edit/<int:id>", methods=["POST"])
def edit_note(id):
    note = Note.query.get_or_404(id)
    note.title = request.form["title"]
    note.content = request.form["content"]
    db.session.commit()
    return redirect(url_for("main.index"))


@main.route('/delete/<int:id>', methods=['POST'])
def delete_note(id):
    db.session.delete(Note.query.get_or_404(id))
    db.session.commit()
    return redirect(url_for('main.index'))
